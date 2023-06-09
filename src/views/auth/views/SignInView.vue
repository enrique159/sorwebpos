<template>
  <div class="signin-view">
    <div class="d-flex justify-between w-100 pa-8">
      <router-link to="/">
        <logo-sor class="logo" />
      </router-link>
      <span-link path="#" :text="$t('General.support')" />
    </div>

    <v-form v-model="valid" class="signin-form">
      <h5>{{ $t("SignIn.title") }}</h5>
      <p class="mb-3">
        {{ $t("SignIn.description") }}
      </p>
      <v-container class="px-0">
        <v-row>
          <v-col cols="12" class="py-0">
            <input-label :value="$t('SignIn.email')" />
            <v-text-field
              class="input-base"
              v-model="email"
              :rules="emailRules"
              :placeholder="$t('SignIn.emailPlaceholder')"
              variant="solo"
              type="email"
              required
            />
          </v-col>
          <v-col cols="12" class="py-0">
            <input-label :value="$t('SignIn.password')" />
            <v-text-field
              class="input-password"
              v-model="password"
              variant="solo"
              :rules="passwordRules"
              :placeholder="$t('SignIn.passwordPlaceholder')"
              :append-inner-icon="showPassword ? 'ri-eye-close-line' : 'ri-eye-2-line'"
              :type="showPassword ? 'text' : 'password'"
              @click:append-inner="showPassword = !showPassword"
              required
            />
          </v-col>
          <v-col cols="12">
            <v-btn
              class="btn-base bg-white-1 tc-black-3 w-100"
              @click="signInUser()"
              :loading="isLoading"
              flat
            >
              {{ $t("SignIn.signin") }}
            </v-btn>
          </v-col>
          <div class="d-flex justify-between w-100 px-3">
            <span-link custom-span-class="tc-white-0 ts-b4 text-decoration-underline" path="#" :text="$t('SignIn.forgotPassword')" />
            <span-link custom-span-class="tc-white-0 ts-b4 text-decoration-underline" path="#" :text="$t('SignIn.createAccount')" />
          </div>
        </v-row>
      </v-container>
    </v-form>

    <div class="d-flex gap-2 w-100 pa-8">
      <span-link path="#" :text="$t('General.terms')" />
      <span-link path="#" :text="$t('General.policyPrivacy')" />
      <locale-switcher />
    </div>
  </div>
</template>

<script setup lang="ts">
// Components
import LogoSor from '@/assets/custom/LogoSor.vue'
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
    return t('SignIn.emailErrors.required')
  },
  (value: any) => {
    if (/.+@.+\..+/.test(value)) return true
    return t('SignIn.emailErrors.email')
  },
])

const password = ref('')
const showPassword = ref(false)
const passwordRules = ref([
  (value: any) => {
    if (value) return true
    return t('SignIn.passwordErrors.required')
  },
  (value: any) => {
    if (value.length >= 8) return true
    return t('SignIn.passwordErrors.minLenght')
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .signin-form {
    width: 100%;
    max-width: 360px;
  }
}

.card-signin {
  width: 100%;
  max-width: 720px;
  height: fit-content;
  min-height: 420px;
  padding: 1rem;
  background: $color-black-2;
}
</style>