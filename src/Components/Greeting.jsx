
const Greeting=()=> {
  const hello="K xa subarna";
  const dataa= new Date();
  return (
    <div>
    <h1>{hello}</h1>
    <p>{dataa.getDate()}</p>
    </div>
  )
}
export default Greeting;