<template>
    <h3 style="opacity: 0.7"  v-if="!this.store.library.length">Библиотека пустя. Скорее добавьте игр, <a href="/">магазин</a></h3>

    <div v-else>

    <div  class="navbar" style="display: flex; margin-bottom: 30px">
        <LibraryButton @click="exportAsExcel"> Export Excel </LibraryButton>
        <LibraryButton @click="exportAsCsv"> Export CSV </LibraryButton>
        <LibraryButton @click="exportAsJson"> Export Json </LibraryButton>
        <LibraryButton @click="changeVisibleOptions"> {{visible?  "Скрыть" : "Предпросмотр (Excel)"}} </LibraryButton>
    </div>

    <div v-show="this.visible">
        <h3 style='text-align: left; margin-bottom: 10px'>Предварительный вариант экспортируемого файла</h3>
        <vue-excel-editor  ref="grid" v-model="this.store.library" readonly>
            <vue-excel-column autoFillWidth readonly field="id" label="Id" type="number" width="80px"/>
            <vue-excel-column autoFillWidth readonly field="title" label="Name" type="string" width="200px"/>
            <vue-excel-column autoFillWidth readonly field="genre" label="Genre" type="string" width="80px"/>
            <vue-excel-column autoFillWidth readonly field="platform" label="Platform" type="string" width="80px"/>
            <vue-excel-column autoFillWidth readonly field="short_description" label="Description" type="string" width="300px" />
        </vue-excel-editor>
    </div>

    <CardsGenerate :games='this.store.library'></CardsGenerate>
    </div>

</template>

<script>
    import {useGamesStore} from "../stores/store.js";
    import CardsGenerate from '@/components/CardsGenerate.vue'
    import LibraryButton from "@/components/UI/LibraryButton.vue"
    import { saveAs } from 'file-saver';
    export default {
        setup() {
            const store = useGamesStore();
            return {
                store
            }
        },
        components: {
            CardsGenerate, LibraryButton
        },
        data () {
            return {
                library: this.store.library,
                visible: true
            }
        },
        methods: {
            exportAsExcel () {
                const format = 'xlsx'
                const exportSelectedOnly = false
                const filename = 'test'
                this.$refs.grid.exportTable(format, exportSelectedOnly, filename)
            },
            exportAsCsv () {
                const format = 'csv'
                const exportSelectedOnly = false
                const filename = 'test'
                this.$refs.grid.exportTable(format, exportSelectedOnly, filename)
            },
            exportAsJson () {
                var fileName = `${Date.now()}.json`;

                var fileToSave = new Blob([JSON.stringify(this.library,undefined,2)], {type: 'application/json'});
                saveAs(fileToSave, fileName);
            },
            changeVisibleOptions () {
                this.visible = !this.visible
            }
        },
    }
</script>

<style scoped>
.navbar .btn {
    margin: 0px 30px;
}
.btn:last-child {
    width: 50%;
}
</style>
