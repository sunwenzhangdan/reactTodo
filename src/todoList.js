// 写一个总的组件
var TodoList=React.createClass({
    render: function(){
          return <div>
           <TypeNew/>
           <TodoList/>
           </div>
    }
})

// 新增组件
var  TodoNew=React.createClass({
     render:function(){
         return <form>
                <input type="text" placeholder="typing a newthing todo" autoComplete="off" />
               </form>
        }
 })

// 展示组件

var TodoShow=React.createClass({
    render:function(){
          <ul id="todo-list">
                {}
            </ul>
    }
})


// 将 TodoList 组件渲染到页面
React.render(<TodoList />, document.getElementById('container'));