<template>
<div>
  Page页面
</div>
</template>

<script>
export default {
  created() {
    const {
      id,
      title
    } = this.$route.query
    console.log(id, title)
    //与后端发生交互
  },
}
</script>

<style>

</style>
