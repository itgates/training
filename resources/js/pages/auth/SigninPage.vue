<template>
  <div>
    <v-card class="text-center pa-1">
      <v-card-title class="justify-center display-1 mb-2">Welcome</v-card-title>
      <v-card-subtitle>Sign in to your account</v-card-subtitle>

      <!-- sign in form -->
      <v-card-text>
        <validation-observer ref="form" v-slot="{ invalid }">
          <v-form>
            <validation-provider v-slot="{ errors }" name="username" rules="required">
              <v-text-field
                v-model="form.username"
                :label="$t('login.username')"
                name="email"
                outlined
                :error-messages="errors[0]"
              ></v-text-field>
            </validation-provider>

            <validation-provider v-slot="{ errors }" name="password" rules="required">
              <v-text-field
                v-model="form.password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                :error-messages="errors[0]"
                :label="$t('login.password')"
                name="password"
                outlined
                @click:append="showPassword = !showPassword"
              ></v-text-field>
            </validation-provider>

            <v-btn
              :loading="isLoading"
              :disabled="invalid || isSignInDisabled"
              block
              x-large
              color="primary"
              @click="submit"
            >
              {{ $t('login.button') }}
            </v-btn>

            <div class="mt-5">
              <router-link to="/auth/forgot-password">
                {{ $t('login.forgot') }}
              </router-link>
            </div>
          </v-form>
        </validation-observer>
      </v-card-text>
    </v-card>

    <div class="text-center mt-6">
      {{ $t('login.noaccount') }}
      <router-link to="/auth/signup" class="font-weight-bold">
        {{ $t('login.create') }}
      </router-link>
    </div>
  </div>
</template>

<script>
/*
|---------------------------------------------------------------------
| Sign In Page Component
|---------------------------------------------------------------------
|
| Sign in template for user authentication into the application
|
*/
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import {mapActions, mapMutations, mapState} from 'vuex';

extend('required', { ...required, message: 'The {_field_} field is required' });

export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      // form
      form: {
        username: '',
        password: ''
      },

      // show password field
      showPassword: false
    }
  },
  computed: {
    ...mapState('authentication', ['isLoading', 'isSignInDisabled'])
  },
  methods: {
    ...mapActions('authentication', ['login']),
    ...mapMutations('authentication', ['setIsSignInDisabled', 'setIsLoading']),
    submit() {
      this.setIsSignInDisabled(true);
      this.setIsLoading(true);
      this.login(this.form)
    }
  }
}
</script>
