<template>
<div class='container'>
    <div class='columns is-mobile is-centered'>
      <div class='column is-4'>
        <div class='has-text-centered'>
          <button class="button is-primary"
                  id='btn'>
            Login form modal
          </button>
        </div>
        <div class="modal">
          <div class="modal-background"></div>
          <div class="modal-content">
            <div class="box">
              <div>
                <h1 class='title has-text-centered'>
                  Login
                </h1>
              </div>
              <form action='#' method='post'>
                <div class='field'>
                  <label class='label'
                         id='username'>
                    Username
                  </label>
                  <div class='control has-icons-left'>
                    <input class='input'
                           type='text'
                           for='username' 
                           placeholder='Username'>
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                </div>
  
                <div class='field'>
                  <label class='label' 
                         id='password'>
                    Password
                  </label>
                  <div class='control has-icons-left'>
                    <input class='input'
                           type='password'
                           for='password' 
                           placeholder='Password'>
                    <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                    </span>
                  </div>
  
                  <div class='buttons'>
                    <button class='button is-link'>
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <button class="modal-close is-large"
                  aria-label="close">
            Model
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
const modal = document.querySelector('.modal');
    const btn = document.querySelector('#btn')
    const close = document.querySelector('.modal-close')
  
    btn.addEventListener('click',
                         function () {
      modal.style.display = 'block'
    })
  
    close.addEventListener('click',
                           function () {
      modal.style.display = 'none'
    })
  
    window.addEventListener('click',
                            function (event) {
      if (event.target.className ===
          'modal-background') {
        modal.style.display = 'none'
      }
    })
</script>

<style scoped>
div.columns {
      margin-top: 50px;
    }
  
    .modal-content {
      margin-top: 100px;
      width: 450px;
    }
  
    .buttons {
      margin-top: 12px;
    }
</style>

