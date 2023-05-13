<template>
  <div class="signin-view">
    <v-card class="card-signin br-4">
      <v-card-title>
        <h1>Sign In</h1>

        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col cols="12" md="5">
                <v-text-field
                  class="input-field-base"
                  v-model="email"
                  :rules="emailRules"
                  label="Usuario"
                  variant="outlined"
                  required
                />
              </v-col>
              <v-col cols="12" md="5">
                <v-text-field
                  class="input-field-base"
                  v-model="password"
                  :rules="passwordRules"
                  label="Contraseña"
                  variant="outlined"
                  required
                />
              </v-col>
              <v-col cols="2">
                <v-btn
                  color="primary"
                  @click="signInUser()"
                  :loading="isLoading"
                >
                  Ingresar
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-title>
    </v-card>
  </div>
</template>

<script setup lang="ts">
// Composables
import { ref } from 'vue'
import { useRouter } from "vue-router"
import { useUser } from '@/composables/stores/useUser'
import { useNotification } from '@/composables/useNotification'
// Types
import { Auth } from '@/app/auth/domain/interfaces'
import Exception from "@/app/shared/error/Exception"
import ErrorCode from "@/app/shared/error/errorCode"
// Locales
import i18n from '@/plugins/i18n'
const { t } = i18n.global

// Form values and validations
const valid = ref(false)
const email = ref('')
const emailRules = ref([
  (value: any) => {
    if (value) return true
    return 'E-mail is requred.'
  },
  (value: any) => {
    if (/.+@.+\..+/.test(value)) return true
    return 'E-mail must be valid.'
  },
])

const password = ref('')
const passwordRules = ref([
  (value: any) => {
    if (value) return true
    return 'Password is requred.'
  },
  (value: any) => {
    if (value.length >= 8) return true
    return 'Password must be at least 8 characters.'
  },
])

// Authentication
const router = useRouter()
const { signIn } = useUser()
const { error: errorToast } = useNotification()
const errorFetchResponse = ref('')
const isLoading = ref(false)

const signInUser = async() => {
  if (valid.value) {
    isLoading.value = true
    const credentianls: Auth = {
      email: email.value,
      password: password.value,
    }

    // create a delay to show the loading
    await new Promise((resolve) => setTimeout(resolve, 1000))
    await signIn(credentianls)
      .then(() => {
        router.push({ name: "Menu" })
      })
      .catch((error) => {
        if (error instanceof Exception) {
          for (let err of error.errors) {
            if (err.code === ErrorCode.ERR0001.code)
              errorFetchResponse.value = t('Login.SignIn.error.notFound')
            else if (err.code === ErrorCode.ERR0017.code)
              errorFetchResponse.value = t('Login.SignIn.error.invalidCredentials')
            else
              errorFetchResponse.value = t('Error.interalServerError')
          }
        } else {
          errorFetchResponse.value = t('Error.interalServerError')
        }
        errorToast(errorFetchResponse.value)
      })
      .finally(() => {
        isLoading.value = false
      })
  }
}
</script>

<style lang="scss" scoped>
.signin-view {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}

.card-signin {
  width: 100%;
  max-width: 720px;
  height: fit-content;
  min-height: 420px;
  padding: 1rem;
  background: $color-black-2;
}

.input-field-base {
  color: $color-text;
}
</style>