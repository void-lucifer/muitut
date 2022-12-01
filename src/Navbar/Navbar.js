/* eslint-disable jsx-a11y/anchor-is-valid */
import {useNavigate} from 'react-router-dom';


function Navbar() {

    const navigate = useNavigate()
    return (
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" onClick={() =>navigate('/')}>MUI</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav d-flex flex-wrap">
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/typography')}>Typography</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/button')}>Button</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/toggle')}>ToggleButton</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/textfield')}>TextField</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/select')}>Select</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/radio')}>Radio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/checkbox')}>Checkbox</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/switch')}>Switch</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/rating')}>Rating</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/autocomplete')}>Autocomplete</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/layout')}>Layout</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/card')}>Card</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/accordion')}>Accordion</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/imagelist')}>ImageList</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/navbar')}>Navbar</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/link')}>Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/breadcrumbs')}>Breadcrumbs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/drawer')}>Drawer</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/speeddial')}>SpeedDial</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/bottomnav')}>BottomNavigation</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/avatar')}>Avatar</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/badge')}>Badge</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/list')}>List</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/chip')}>Chip</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/tooltip')}>Tooltip</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/table')}>Table</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/alert')}>Alert</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/snackbar')}>Snackbar</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/dialog')}>Dialog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/progress')}>Progress</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/skeleton')}>Skeleton</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/loadingButton')}>LoadingButton</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/picker')}>Picker</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/tabs')}>Tabs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/timeline')}>Timeline</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/masonry')}>Masonry</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/responsiveness')}>Responsiveness</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}

export default Navbar;