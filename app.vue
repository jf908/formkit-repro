<template>
  <div>
    <FormKit type="test-text">
      <template #slotName="{ fooBar }">{{ fooBar.toUpperCase() }}</template>
    </FormKit>
  </div>
</template>
