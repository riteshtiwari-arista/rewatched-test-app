import { useState } from 'react'

function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simple validation - accept any input for testing
    if (email && password) {
      onLogin()
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h1 className="login-title">EmployeeHub</h1>
          <p className="login-subtitle">Sign in to your account</p>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="form-input"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="form-input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="checkbox-item">
            <input
              id="remember"
              type="checkbox"
              className="checkbox-input"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label className="checkbox-label" htmlFor="remember">
              Remember me
            </label>
          </div>

          <button type="submit" className="btn btn-primary btn-block btn-lg">
            Sign In
          </button>

          <div className="text-center">
            <a href="#" className="form-hint" style={{ textDecoration: 'underline' }}>
              Forgot your password?
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
