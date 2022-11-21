<script setup>
import { mapWritableState } from 'pinia'
import { useTootsStore } from '@/stores/toots';
import { computed } from '@vue/reactivity';
const toots = useTootsStore();

function scheduleToot(){
  toots.scheduleToot;
}
</script>

<template>
  <div class="toot">
    <div class="mt-auto">
      <label for="baseUrl" class="form-label">Base URL</label>
      <input type="text" class="form-control" id="baseUrl" v-model="toots.baseUrl" />
    </div>
    <div class="mb-3">
      <label for="token" class="form-label">Token</label>
      <input type="text" class="form-control" id="token" v-model="toots.token" />
    </div>
    <div class="mb-3">
      <label for="status" class="form-label">Status</label>
      <textarea rows=5 class="form-control" id="status" v-model="toots.status"></textarea>
    </div>
    <div class="mb-3">
      <label for="scheduledAt" class="form-label">Schdeduled For</label>
      <input type="datetime-local" class="form-control" id="scheduledAt" v-model="toots.scheduledAt" />
    </div>
    <div class="mb-4">
      <button type="button" class="btn btn-primary" @click="toots.scheduleToot">t00t!</button>
    </div>
  </div>
</template>

