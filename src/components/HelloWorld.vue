<script setup>
import { useTootsStore } from "@/stores/toots";
const toots = useTootsStore();
</script>

<template>
  <div class="toot">
    <div class="mt-auto">
      <label for="baseUrl" class="form-label">Base URL</label>
      <input
        type="text"
        class="form-control"
        id="baseUrl"
        v-model="toots.baseUrl"
      />
    </div>
    <div class="mb-3">
      <label for="token" class="form-label"
        >Token (needs at least <em>write:statuses</em> permission)</label
      >
      <input
        type="text"
        class="form-control"
        id="token"
        v-model="toots.token"
      />
    </div>
    <div class="mb-3">
      <label for="status" class="form-label">Status</label>
      <textarea
        rows="5"
        class="form-control"
        id="status"
        v-model="toots.status"
      ></textarea>
    </div>
    <div class="mb-3">
      <label for="scheduledAt" class="form-label">Schdeduled For</label>
      <input
        type="datetime-local"
        class="form-control"
        id="scheduledAt"
        v-model="toots.scheduledAt"
      />
    </div>
    <div class="mb-4">
      <button type="button" class="btn btn-primary" @click="toots.scheduleToot">
        t00t!
      </button>
    </div>
  </div>
  <div class="messages">
    <div class="mb-3" v-for="(message, index) in toots.messages" :key="index">
      <div
        class="alert"
        :class="message.error ? 'alert-danger' : 'alert-success'"
        role="alert"
      >
        <span v-if="message.error">{{ message.response.message }}</span>
        <span v-else
          >Scheduled toot #{{ message.response.data.id }} for posting
          <span v-if="message.response.data.scheduled_at">
            at {{ message.response.data.scheduled_at }}</span
          >
        </span>
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          @click="toots.messages.pop({ index })"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  </div>
</template>
