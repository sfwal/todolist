var goodsList = [
  {
    name:"车工官方旗舰店",
    checked:false,
    goods:[
      {
        name:"嘉实多(Castrol)机油润滑油 极护磁护金嘉护银嘉护 磁护全合成 4L 5W-40 SN",
        price:229,
        num:1,
        img:"http://placehold.it/80X80",
        checked:false
      },
      {
        name:"嘉实多(Castrol)机油润滑油 极护磁护金嘉护银嘉护 磁护全合成 4L 5W-40 SN",
        price:229,
        num:1,
        img:"http://placehold.it/80X80",
        checked:false
      },
      {
        name:"嘉实多(Castrol)机油润滑油 极护磁护金嘉护银嘉护 磁护全合成 4L 5W-40 SN",
        price:229,
        num:1,
        img:"http://placehold.it/80X80",
        checked:false
      }
    ]
  },
  {
    name:"京东自营",
    checked:false,
    goods:[
      {
        name:"嘉实多(Castrol)机油润滑油 极护磁护金嘉护银嘉护 磁护全合成 4L 5W-40 SN",
        price:229,
        num:1,
        img:"http://placehold.it/80X80",
        checked:false
      },
      {
        name:"嘉实多(Castrol)机油润滑油 极护磁护金嘉护银嘉护 磁护全合成 4L 5W-40 SN",
        price:229,
        num:1,
        img:"http://placehold.it/80X80",
        checked:false
      },
      {
        name:"嘉实多(Castrol)机油润滑油 极护磁护金嘉护银嘉护 磁护全合成 4L 5W-40 SN",
        price:229,
        num:1,
        img:"http://placehold.it/80X80",
        checked:false
      }
    ]
  },
  {
    name:"车工官方旗舰店",
    checked:false,
    goods:[
      {
        name:"嘉实多(Castrol)机油润滑油 极护磁护金嘉护银嘉护 磁护全合成 4L 5W-40 SN",
        price:229,
        num:1,
        img:"http://placehold.it/80X80",
        checked:false
      },
      {
        name:"嘉实多(Castrol)机油润滑油 极护磁护金嘉护银嘉护 磁护全合成 4L 5W-40 SN",
        price:229,
        num:1,
        img:"http://placehold.it/80X80",
        checked:false
      },
      {
        name:"嘉实多(Castrol)机油润滑油 极护磁护金嘉护银嘉护 磁护全合成 4L 5W-40 SN",
        price:229,
        num:1,
        img:"http://placehold.it/80X80",
        checked:false
      }
    ]
  }
];
Vue.filter("money",function(value){
  return "￥" + value.toFixed(2);
});
var app = new Vue({
  el:".cart",
  data:{
    list:goodsList,
    allchecked:false,
    allNum:0,
    allPrice:0
  },
  methods:{
    //所有全选
    chooseAll:function(){
      //console.log(this.allchecked);
      var flag = true;
      if(this.allchecked){
        flag = false
      }
      for(var i=0;i<this.list.length;i++){
        this.list[i].checked = flag;
        for(var j=0;j<this.list[i].goods.length;j++){
          this.list[i].goods[j].checked = flag;
        }
      }
      //this.allchecked = !this.allchecked;
    },
    //店铺全选
    shopChoose:function(index){
      if(this.list[index].checked){
        for(var i=0;i<this.list[index].goods.length;i++){
          this.list[index].goods[i].checked = false;
        }
      }else{
        for(var i=0;i<this.list[index].goods.length;i++){
          this.list[index].goods[i].checked = true;
        }
      }
      this.list[index].checked = !this.list[index].checked;
      console.log(this.list[index].checked);
      this.isChooseAll();
    },
    //单个选择
    goodChoose:function(index,index1){
      console.log(this.list[index].goods[index1].checked);
      //取消选中
      if(this.list[index].goods[index1].checked){
        this.list[index].checked = false;
        this.allchecked = false;
      }else{
        //选中
        // console.log(this.list[index].goods[index1].checked);
        this.list[index].goods[index1].checked = !this.list[index].goods[index1].checked;
        var flag = true;
        for(var i=0;i<this.list[index].goods.length;i++){
          if(this.list[index].goods[i].checked == false){
            flag = false;
            break;
          }
        }
        flag == true ? this.list[index].checked = true : this.list[index].checked = false;
        this.isChooseAll();
      }
    },
    isChooseAll:function(){
      var flag1 = true;
      for(var k=0;k<this.list.length;k++){
        if(this.list[k].checked == false){
          flag1 = false;
          break;
        }
      }
      flag1 == true ? this.allchecked = true : this.allchecked = false;
    },

  }
})
