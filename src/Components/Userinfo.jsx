
const Userinfo = () => {
  const users=[
    {id:1, name:"subarna",age:23},
    {id:2,name:"sudharsan",age:25},
    {id:3,name:"parbati",age:50},
  ];
    return (
    <div>
    {users.map((user,index)=>{
        <ul key={index}>
            <li>
                {user.id}
            </li>
            <li>{user.name}</li>
            <li>{user.age}</li>
        </ul>
    })}
    </div>
  )
}

export default Userinfo