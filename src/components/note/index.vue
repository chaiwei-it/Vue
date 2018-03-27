<template>
  <div>
    <div id="note-catalog">
      <div class="table">
        文件夹
      </div>
    </div>
    <div id="note-note">
      <div class="table">
        <Table :columns="columns" :data="data"></Table>
      </div>
    </div>
  </div>
</template>

<script>
import lib from '@/assets/js/lib.js'
const { dateTime } = lib
export default {
  data () {
    return {
      columns: [
        {
          type: 'index',
          width: 60,
          align: 'center'
        },
        {
          title: '编号',
          key: 'code'
        },
        {
          title: this.$lang.currency.name,
          key: 'text'
        },
        {
          title: '备注',
          key: 'remark'
        },
        {
          title: this.$lang.currency.uTime,
          width: 170,
          key: 'createTime',
          render: (h, params) => {
            return dateTime(params.row.createTime)
          }
        },
        {
          width: 100,
          render: (h, params) => {
            let arr = []
            if (this.judge.edit) {
              arr.push(h('Button', {
                props: {
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.editItem.code = params.row.code
                    this.editItem.remark = params.row.remark
                    this.editItem.text = params.row.text
                    this.editItem.dictClassId = params.row.dictClassId
                    this.editItem.id = params.row.id
                    this.model_update = true
                  }
                }
              }, this.$lang.currency.edit))
            }
            if (this.judge.del) {
              arr.push(h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.removeItem(params.row.id)
                  }
                }
              }, this.$lang.currency.del))
            }
            return h('ButtonDropdown', arr)
          }
        }
      ]
    }
  }
}
</script>

<style>
#note-note {
  float: left;
  width: 80%;
}
#note-catalog {
  float: left;
}
#index-text {
  width: 80px;
  height: 20px;
  margin: auto;
  text-align: center;
  line-height: 500px;
}
</style>
