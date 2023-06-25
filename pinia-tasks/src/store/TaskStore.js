import { defineStore } from "pinia";

export const useTaskStore = defineStore('tasksStore', {
    state: () => ({
        tasks: [
            {   id: 1,  title: 'Task 1',  isFav: false },
            {   id: 2,  title: 'Task 2',  isFav: true },
        ],
    }),
    getters: {
        favs(){
            return this.tasks.filter(task => task.isFav)
        },
        favsCount(){
            return this.tasks.reduce((prev, curr) => curr.isFav ? prev + 1 : prev, 0)
        },
        totalCount: (state) =>{
            return state.tasks.length
        }
    },
    actions: {
        addTask(task){
            this.tasks.push(task)
        },
        deleteTask(id){
            this.tasks = this.tasks.filter(task => task.id !== id)
        },
        toggleFav(id){
            const task = this.tasks.find(task => task.id === id)
            task.isFav = !task.isFav
        }
    }
})