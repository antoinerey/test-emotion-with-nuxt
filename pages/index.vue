<template>
  <div>
    <Button>Hello world</Button>
  </div>
</template>

<script>
import styled from '@/styled'

const Button = styled('button', {
  color: 'red'
})

export default {
  components: {
    Button,
  }
}
</script>
