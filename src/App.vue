<template>
  <div id="app">
    <el-button @click="submit">提交</el-button>
    <el-upload action="/" :auto-upload="false" ref="upload" drag>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </el-upload>
    <div>
      <span class="headerY">-</span>
      <span class="headerX">0</span>
      <span class="headerX">1</span>
      <span class="headerX">2</span>
      <span class="headerX">3</span>
      <span class="headerX">4</span>
      <span class="headerX">5</span>
      <span class="headerX">6</span>
      <span class="headerX">7</span>
      <span class="headerX">8</span>
      <span class="headerX">9</span>
      <span class="headerX">A</span>
      <span class="headerX">B</span>
      <span class="headerX">C</span>
      <span class="headerX">D</span>
      <span class="headerX">E</span>
      <span class="headerX">F</span>
    </div>
    <div
      v-for="(list, listIndex) of resultList"
      :key="listIndex + '_' + randerTime"
    >
      <!-- <div v-if="listIndex < 10"> -->
      <div>
        <span class="headerY">{{ listIndex.toString(16) }}</span>

        <span
          class="data"
          v-for="(item, itemImdex) of list"
          :key="item + '_' + itemImdex"
          >{{ toHex(item) }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      resultList: [],
      randerTime: 0,
    };
  },
  methods: {
    toHex(item) {
      if (item == null) {
        return "-";
      }
      let str = item.toString(16);
      while (str.length < 2) {
        str = "0" + str;
      }
      return str;
    },
    submit() {
      let file = this.$refs.upload.uploadFiles[0].raw;
      let reader = new FileReader();
      reader.onload = (e) => {
        let dataView = new DataView(e.target.result);
        let resultList = [];

        for (let i = 0; i < dataView.byteLength; i = i + 16) {
          let list = [];
          resultList.push(list);
          for (let j = 0; j < 16; j++) {
            if (i + j < dataView.byteLength) {
              list.push(dataView.getUint8(i + j));
            } else {
              list.push(null);
            }
          }
        }
        this.randerTime++;

        this.resultList = resultList;
      };
      reader.readAsArrayBuffer(file);
    },
  },
};
</script>

<style>
.data {
  width: 40px;
  display: inline-block;
  border: 1px solid black;
}
.headerX {
  width: 40px;
  background-color: red;
  display: inline-block;
  border: 1px solid black;
}
.headerY {
  width: 120px;
  text-align: right;
  background-color: green;
  display: inline-block;
  border: 1px solid black;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
