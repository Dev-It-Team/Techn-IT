<template>
  <div class="home">
    <h1 class="mainTitle">
        Techn'IT
    </h1>
    <transition name="component-fade">
        <SignIn v-on:on-login-success="onLoginSuccess" />
    </transition>
  </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import SignIn from '@devitteam/signin'
    import { User } from '@/interfaces/IUser';
    import { ElMessage } from 'element-plus';
    import store from '@/store'
    import axios from 'axios'
    import router from '@/router'
    


    const Login = defineComponent({
        name: "Login",
        created() {
            document.title = "Login"
        },
        components: {
            SignIn
        },
        data() {
            return {
            }
        },
        methods: {
            async onLoginSuccess(token: string) {
                store.dispatch('setToken', token);
                console.log(token);

                const user: User = await axios
                    .get('http://localhost:3000/login/tokeninfo')
                    .then(response => response.data);
                store.dispatch('setUserInfo', user);
                console.log(user.UserFlag);


                if (user.UserFlag == 4)
                {
                    router.push({ name: 'TechniqueHome'} );
                    ElMessage.success(`Welcome back! You are logged in as ${user.Email}.`);
                } else {
                    store.dispatch('logout');
                }
                
            }
        },
        mounted() {
            const user = store.getters.getUser;
            if (Object.keys(user).length > 0) router.push({ name: 'TechniqueHome'} );
        }
    });
    export default Login;
</script>

<style>
    .el-card {
        min-width: 300px;
        margin: auto;
    }
    .el-form {
        max-width: 460px;
        margin: auto; /* center */
    }
    .el-input:not(:last-child) {
        margin: 5px 0; /* top & bottom */
    }
    .button-login-form-toogler {
        margin-top: 20px !important;
        white-space: normal !important;
    }

    .mainTitle {
        margin-bottom: 45px;
    }

    .component-fade-enter-active, .component-fade-leave-active {
        transform: translateX(-800px);
        position: absolute;
    }
    .component-fade-enter, .component-fade-leave-to {
        opacity: 0;
    }
</style>
