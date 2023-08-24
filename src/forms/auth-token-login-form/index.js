import { useDispatch } from "react-redux";
import {
  postLoginData,
  ChangeEmail,
  ChangePassword,
} from "../../redux/slice/logintokenslice";

const TokenLoginForm = () => {
  const dipatch = useDispatch();

  const Submit = (e) => {
    e.preventDefault();
    dipatch(postLoginData());
  };

  return (
    <div className="container mt-5 w-25 shadow-lg p-3 mb-5 bg-body rounded">
      <form onSubmit={Submit}>
        <div className="col-md-9">
          <label className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            name="email"
            onChange={(e) => dipatch(ChangeEmail(e.target.value))}
          />
        </div>
        <div className="col-md-9">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            onChange={(e) => dipatch(ChangePassword(e.target.value))}
          />
        </div>
        <div className="col-auto mt-3">
          <button
            type="submit"
            // onClick={(e) => e.preventDefault()}
            className="btn btn-primary"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default TokenLoginForm;
