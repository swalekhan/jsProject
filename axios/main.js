//AXIOS GLOBLE
axios.defaults.headers.common['X-Auth-Token'] = 'sometoken'
// GET REQUEST
// function getTodos() {
//     axios({
//         method: 'get',
//         url:'https://jsonplaceholder.typicode.com/todos',
//         params:{
//         _limit: 5
//         }
//     })
//     .then((res)=>showOutput(res))
//     .catch((err)=>console.log("error"))
//   }

//SORTER WAY
  function getTodos() {
    axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then((res)=>showOutput(res))
    .catch((err)=>console.log("error"))
  }
  
  // POST REQUEST
  function addTodo() {
    axios
    .post('https://jsonplaceholder.typicode.com/todos',{
        title:'New Todo',
        completed: false
    })
   .then((res)=>showOutput(res))
   .catch((err)=>console.log("error"))
          
  }
  
  // PUT/PATCH REQUEST
  function updateTodo() {
    axios
    .patch('https://jsonplaceholder.typicode.com/todos/1',{
        title:'Update',
        completed: true
    })
   .then((res)=>showOutput(res))
   .catch((err)=>console.log("error"))
  }
  
  // DELETE REQUEST
  function removeTodo() {
    axios
    .delete('https://jsonplaceholder.typicode.com/todos/1')
   .then((res)=>showOutput(res))
   .catch((err)=>console.log("error"))
  }
  
  // SIMULTANEOUS DATA
  function getData() {
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    ])
   .then(axios.spread((posts,todo)=>showOutput(todo)))
   .catch((err)=>console.log("error"))
  
  }
  
  // CUSTOM HEADERS
  function customHeaders() {
    const config = {
        headers:{
            'content-type': 'application/json',
            Authorization:'sometoken'
        }
    }
    axios
    .post('https://jsonplaceholder.typicode.com/todos',{
        title:'New Todo',
        completed: false
    },config)
   .then((res)=>showOutput(res))
   .catch((err)=>console.log("error"))
  }
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
    console.log('Transform Response');
  }
  
  // ERROR HANDLING
  function errorHandling() {
    axios
    .get('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>showOutput(res))
    .catch((err)=>{
    if(err.response){
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
        if(err.response.status == 404){
            alert("error: page not found")
        }
    }else if(err.request){
        console.log(err.request)
    }else{
        console.log(err.message)
    }
}
)}
  
  // CANCEL TOKEN
  function cancelToken() {
   let source = axios.CancelToken.source();

   axios
   .get('https://jsonplaceholder.typicode.com/todos',{
    cancelToken:source.token
   })
   .then((res)=>showOutput(res))
   .catch(thrown=>{
    if(axios.isCancel(thrown)){
        console.log('request canceled',thrown.message)
    }
   })
   if(true){
    source.cancel('request canceled')
   }
  }
  
  // INTERCEPTING REQUESTS & RESPONSES
    axios.interceptors.request.use((config)=>{
        console.log(`${config.method.toUpperCase()} request sent to ${config.url} At ${new Date()}`)
         return config;
        
    },(error)=>{return Promise.reject(error)}
    )
  // AXIOS INSTANCES
  
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);