
 <>
        
 {
!toggle 
? 
(
<div className='body'>   
    <div className='container'>
        <div className='form-container-signup-container'>
            <form className='signup-form' onSubmit={handleSignup}>
                <h1>Create Account</h1>
                <input className='signup-input' type="text" id="username" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <input className='signup-input' type="password" id="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input> 
                <button className='sign-in-bttn' type="submit">Submit</button>
            </form>
         </div>
     <div>
                <button className='sign-in-bttn' onClick={handleToggle}>Already Have An Account ?</button>
        </div>
    </div>
</div> 
)

:
<>
<form onSubmit={handleLogin}>
    <div >
<div >
<h3>Log In</h3>
    <div className='form-group'>
            <label>Username</label>
            </div>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <div className='form-group'>
            <label>Password</label>
            </div>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
    
    <button type="submit">Login</button>
</div>
<button  onClick={handleToggle} type="submit">Sign Up</button>
</div>
</form>   
<div>
</div>
 </>

}

    <div>
       {errors?.map((err) => (
           <p>{err}</p>
       ))}
    </div>
</>
