


async function time(){
    await  new Promise((resolve) =>{
        setTimeout(resolve,3000)
    }) ;
   
}

export default async function about(){
     await time()
     throw new  Error("new error")
    return (
        <div>
            <h2 className="text-white text-4xl">about pages</h2>
        </div>
    )

    

  

}