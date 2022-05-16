import defaultimg from './Images/defaultimg.png'

function defaultapp(){
    return(
        <div className="row">
            <img src = {defaultimg}></img>
            <div className = "defaultcol">
                <p className='text-center h1 p-5 pt-0'>Signup / Login To continue</p>
            </div>
        </div>
    )
}

export default defaultapp