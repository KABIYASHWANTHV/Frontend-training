import './Login_form.css';

const Login_form = () => {
    return (
        <>
                <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">Username</span>
                        <input type="text" className="form-control" placeholder="Ex: Kabi"  />
                </div>
                <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">Email</span>
                        <input type="email" className="form-control" placeholder="Ex: Kabi@gmail.com"  />
                </div>
        </>
    )
}

export default Login_form;
