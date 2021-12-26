<template>
    <table v-if="users.length">
        <tr>
            <th>Id</th>
            <th>Name</th>
            <td class="actions"></td>
        </tr>
        <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td class="actions" @click="remove(user)">
                <div class="btn">Remove</div>
            </td>
        </tr>
    </table>
    <div v-else>
        <i>Enter a name to add them in a list with VUE3!</i>
    </div>
    <input class="adduser" type="text" placeholder="Type and hit enter to insert" v-model="user.name" @keypress.enter="add">
</template>

<script>
import { reactive, ref } from 'vue'
    export default {
        setup(props) {
            var user = ref({
                id: 1,
                name: null,
            });
            var users = ref([]);

            const add = () => {
                users.value.push({
                    id: user.value.id++,
                    name: user.value.name
                });
                user.value.name = null;
            }

            const remove = ({name}) => {
                var index = users.value.findIndex(u => u.name == name);
                users.value.splice(index, 1);
            }

            return {add, remove, user, users};
        }
    }
</script>