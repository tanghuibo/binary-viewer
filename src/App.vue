<template>
  <div id="app">
    <div style="text-align: center; margin: 20px;">
      <el-upload
        action="/"
        :show-file-list="false"
        :before-upload="submit"
        drag
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      </el-upload>
    </div>
    <tbody style="text-align: center;">
      <tr>
        <td rowspan="1" colspan="1">
          <div class="cell-box">
            <div class="cell shadow" style="width: 5vw; border: none;"></div>
            <div
              class="cell"
              style="width: 5vw; border: none; padding: 1px;"
            ></div>
          </div>
        </td>

        <td
          v-for="(item, index) of [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
          ]"
          rowspan="1"
          colspan="1"
          class="headerX"
          :key="item"
        >
          <div class="cell-box">
            <div
              @mouseleave="() => hover(-1, -1)"
              @mouseenter="() => hover(index, -1)"
              style="background-color: #f0f0f0;"
              class="cell shadow headerX"
            >
              {{ item }}
            </div>
            <div
              @mouseleave="() => hover(-1, -1)"
              @mouseenter="() => hover(index, -1)"
              style="background-color: #f0f0f0;"
              class="cell headerX"
            >
              {{ item }}
            </div>
          </div>
        </td>
      </tr>
    </tbody>
    <div class="scroll-view">
      <tbody style="text-align: center;">
        <tr
          v-for="(list, listIndex) of showData"
          :key="listIndex + '_' + randerTime"
        >
          <!-- <div v-if="listIndex < 10"> -->

          <td rowspan="1" colspan="1" class="headerY">
            <div class="cell-box">
              <div
                style="background-color: #f0f0f0;"
                class="cell shadow headerY"
                @mouseleave="() => hover(-1, -1)"
                @mouseenter="() => hover(-1, listIndex)"
              >
                {{ (listIndex + (param.page - 1) * param.size).toString(16).toLocaleUpperCase() }}
              </div>
              <div
                style="background-color: #f0f0f0;"
                class="cell headerY"
                @mouseleave="() => hover(-1, -1)"
                @mouseenter="() => hover(-1, listIndex)"
              >
                {{ (listIndex + (param.page - 1) * param.size).toString(16).toLocaleUpperCase() }}
              </div>
            </div>
          </td>

          <td
            rowspan="1"
            colspan="1"
            v-for="(item, itemImdex) of list"
            :key="item + '_' + itemImdex"
          >
            <div class="cell-box">
              <div
                :style="{
                  fontStyle: item == null ? 'italic' : null,
                  backgroundColor:
                    param.hoverX == itemImdex && param.hoverY == listIndex
                      ? '#409EFF'
                      : param.hoverX == itemImdex || param.hoverY == listIndex
                      ? 'rgb(179, 216, 255)'
                      : item == null
                      ? '#a0a0a0'
                      : null,
                }"
                class="cell shadow"
                @mouseleave="() => hover(-1, -1)"
                @mouseenter="() => hover(itemImdex, listIndex)"
              >
                {{ toChar(item) }}
              </div>
              <div
                :style="{
                  
                  backgroundColor:
                    param.hoverX == itemImdex && param.hoverY == listIndex
                      ? '#409EFF'
                      : param.hoverX == itemImdex || param.hoverY == listIndex
                      ? 'rgb(179, 216, 255)'
                      : item == null
                      ? '#a0a0a0'
                      : null,
                }"
                class="cell"
                @mouseleave="() => hover(-1, -1)"
                @mouseenter="() => hover(itemImdex, listIndex)"
              >
                {{ toHex(item) }}
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </div>
    <div style="text-align: center; margin: 8px;">
      <el-pagination
        :current-page.sync="param.page"
        :page-size.sync="param.size"
        :total="dataView.byteLength / 16"
        layout="total, sizes, prev, pager, next, jumper"
        :page-sizes="[16, 64, 128, 256, 512, 1024]"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  computed: {
    showData() {
      let dataView = this.dataView;
      let start = (this.param.page - 1) * this.param.size * 16;
      let end = this.param.page * this.param.size * 16;
      let resultList = [];

      for (let i = start; i < end; i = i + 16) {
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
      return resultList;
    },
  },
  data() {
    return {
      param: {
        page: 1,
        size: 16,
        hoverX: -1,
        hoverY: -1,
      },
      randerTime: 0,
      dataView: {
        byteLength: 0,
      },
    };
  },
  methods: {
    hover(x, y) {
      this.param.hoverX = x;
      this.param.hoverY = y;
    },
    toChar(item) {
      if (item == null) {
        return "(null)";
      }
      return String.fromCharCode(item);
    },
    toHex(item) {
      if (item == null) {
        return "-";
      }
      let str = item.toString(16).toLocaleUpperCase();
      while (str.length < 2) {
        str = "0" + str;
      }
      return str;
    },
    submit(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        let dataView = new DataView(e.target.result);
        this.dataView = dataView;
        this.randerTime++;
      };
      reader.readAsArrayBuffer(file);
      return false;
    },
  },
};
</script>

<style scoped>
.scroll-view {
  max-height: 60vh;
  width: calc(100vw-20px);
  overflow-y: scroll;
}

.shadow {
  position: absolute;
  left: 50vw;
  top: 0px;
}

.cell {
  height: 20px;
  line-height: 20px;
  width: 2.5vw;
  border: 1px solid black;
}

.cell-box {
  position: relative;
}

.headerX {
  width: 2.5vw;
}

.headerY {
  width: 5vw;
  text-align: right;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
