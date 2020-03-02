<template>
  <div>
    <Button>Hello world</Button>
  </div>
</template>

<script>
import { styled } from '@egoist/vue-emotion'

const Button = styled('button')`
  color: red;
`

export default {
  components: {
    Button,
  }
}
</script>
