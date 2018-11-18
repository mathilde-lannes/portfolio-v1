<template>
  <div class="welcome row">
    <div class="auth-wallpaper col-12">
      <div class="oblique"></div>

      <div class="row">

        <div id="avatar-container" class="col-12">
          <img id="avatar" src="http://www.synapse-developpement.fr/wp-content/uploads/2017/01/mathilde-lannes-e1541168117479.png"/>
        </div>

        <div class="col-12">
          <router-link class="auth-wallpaper__logo"  :to="{path: '/'}">
            <div class="title"> MATHILDE LANNES </div>
            <div class="desc"> développeuse full stack en alternance </div>
          </router-link>
        </div>

      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'welcome',
}

</script>
<style lang="scss" scoped>
  .welcome {
    height: 100vh;
    
    #avatar-container {
      text-align: center;
      margin-bottom: 5%;
    }

    #avatar {
      border-radius: 50%;
      border: 2px solid $lighter-gray;
      z-index: 2;
    }

    .auth-wallpaper {
      height: 100%;
      background-color: $vue-darkest-blue;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      &__logo {
        z-index: 2;
        width: 100%;
      }
      .auth-wallpaper__logo {
        text-align: center;
        overflow: hidden;
        .title {
          font-size: 64px;
          font-weight: bold;
          letter-spacing: 3px;
        }
        .desc {
          font-size: 18px;
          color: $light-gray;
        }
      }
      .oblique {
        position: absolute;
        background-color: $auth-wallpaper-oblique-line;
        left: calc(50% - 15%/2);
        transform: rotate(15deg);
        width: 15%;
        height: 115vh;
      }
    }
  }

</style>
