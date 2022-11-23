import { ref } from "vue";
import { defineStore } from "pinia";
import { DateTime } from "luxon";
// import moment from 'moment';
import axios from "axios";

export const useTootsStore = defineStore("toots", {
  state: () => ({
    baseUrl: ref("https://mastodon.social"),
    token: ref(""),
    status: ref(""),
    scheduledAt: DateTime.now().toISO().slice(0, -13),
    messages: ref([]),
  }),
  persist: true,
  actions: {
    scheduleToot() {
      const realScheduledAt = DateTime.fromISO(this.scheduledAt).toISO();
      axios
        .post(
          `${this.baseUrl}/api/v1/statuses`,
          {
            status: this.status,
            scheduled_at: realScheduledAt,
          },
          { headers: { Authorization: `Bearer ${this.token}` } }
        )
        .then((response) => {
          console.log(response);
          this.messages.push({ response: response, error: false });
        })
        .catch((error) => {
          console.log(error);
          this.messages.push({ response: error, error: true });
        });
    },
  },
});
