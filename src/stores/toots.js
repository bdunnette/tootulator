import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { DateTime } from "luxon";
// import moment from 'moment';
import axios from "axios";

export const useTootsStore = defineStore('toots', {
    state: () => ({ baseUrl: ref('https://mastodon.social'), token: ref(''), status: ref(), scheduledAt: DateTime.now().toISO().slice(0, -13) }),
    persist: true,
    actions: {
        scheduleToot() {
            console.log(this.baseUrl)
            console.log(this.token)
            console.log(this.scheduledAt)
            console.log(this.status)
            const realScheduledAt = DateTime.fromISO(this.scheduledAt).toISO()
            console.log(realScheduledAt)
            // axios.post(`${this.baseUrl}/api/v1/apps`, {client_name:'tootulator',scopes:"write:statuses",redirect_uris:'urn:ietf:wg:oauth:2.0:oob'}).then((response) => {console.log(response)}).catch((error) => {console.log(error)})
            axios.post(
                `${this.baseUrl}/api/v1/statuses`, {
                status: this.status, scheduled_at: realScheduledAt
            }, { headers: { Authorization: `Bearer ${this.token}` } })
            .then((response) => { console.log(response) })
            .catch((error) => { console.log(error) })
        }
    },
})