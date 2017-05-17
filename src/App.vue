<template>
  <div>
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function(){
    return {
      text: 'Hello world'
    }
  }
}
</script>

<style>
  p{color:red}
</style>
