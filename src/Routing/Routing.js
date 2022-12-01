import { Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Home';
import MuiTypography from '../components/MuiTypography';
import MuiButton from '../components/MuiButton';
import MuiToggleButton from '../components/MuiToggleButton';
import MuiTextField from '../components/MuiTextField';
import MuiSelect from '../components/MuiSelect';
import MuiRadio from '../components/MuiRadio';
import MuiCheckbox from '../components/MuiCheckbox';
import MuiSwitch from '../components/MuiSwitch';
import MuiRating from '../components/MuiRating';
import MuiAutocomplete from '../components/MuiAutocomplete';
import MuiLayout from '../components/MuiLayout';
import MuiCard from '../components/MuiCard';
import MuiAccordion from '../components/MuiAccordion';
import MuiImageList from '../components/MuiImageList';
import MuiNavbar from '../components/MuiNavbar';
import MuiLink from '../components/MuiLink';
import MuiBreadcrumbs from '../components/MuiBreadcrumbs';
import MuiDrawer from '../components/MuiDrawer';
import MuiSpeedDial from '../components/MuiSpeedDial';
import MuiBottomNavigation from '../components/MuiBottomNavigation';
import MuiAvatar from '../components/MuiAvatar';
import MuiBadge from '../components/MuiBadge';
import MuiList from '../components/MuiList';
import MuiChip from '../components/MuiChip';
import MuiTooltip from '../components/MuiTooltip';
import MuiTable from '../components/MuiTable';
import MuiAlert from '../components/MuiAlert';
import MuiSnackbar from '../components/MuiSnackbar';
import MuiDialog from '../components/MuiDialog';
import MuiProgress from '../components/MuiProgress';
import MuiSkeleton from '../components/MuiSkeleton';
import MuiLoadingButton from '../components/MuiLoadingButton';
import MuiPicker from '../components/MuiPicker';
import MuiTabs from '../components/MuiTabs';
import MuiTimeline from '../components/MuiTimeline';
import MuiMasonry from '../components/MuiMasonry';
import MuiResponsiveness from '../components/MuiResponsiveness';

function Routing() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/typography" element={<MuiTypography />} />
                <Route path="/button" element={<MuiButton />} />
                <Route path="/toggle" element={<MuiToggleButton />} />
                <Route path="/textfield" element={<MuiTextField />} />
                <Route path="/select" element={<MuiSelect />} />
                <Route path="/radio" element={<MuiRadio />} />
                <Route path="/checkbox" element={<MuiCheckbox />} />
                <Route path="/switch" element={<MuiSwitch />} />
                <Route path="/rating" element={<MuiRating />} />
                <Route path="/autocomplete" element={<MuiAutocomplete />} />
                <Route path="/layout" element={<MuiLayout />} />
                <Route path="/card" element={<MuiCard />} />
                <Route path="/accordion" element={<MuiAccordion />} />
                <Route path="/imagelist" element={<MuiImageList />} />
                <Route path="/navbar" element={<MuiNavbar />} />
                <Route path="/link" element={<MuiLink />} />
                <Route path="/breadcrumbs" element={<MuiBreadcrumbs />} />
                <Route path="/drawer" element={<MuiDrawer />} />
                <Route path="/speeddial" element={<MuiSpeedDial />} />
                <Route path="/bottomnav" element={<MuiBottomNavigation />} />
                <Route path="/avatar" element={<MuiAvatar />} />
                <Route path="/badge" element={<MuiBadge />} />
                <Route path="/list" element={<MuiList />} />
                <Route path="/chip" element={<MuiChip />} />
                <Route path="/tooltip" element={<MuiTooltip />} />
                <Route path="/table" element={<MuiTable />} />
                <Route path="/alert" element={<MuiAlert />} />
                <Route path="/snackbar" element={<MuiSnackbar />} />
                <Route path="/dialog" element={<MuiDialog />} />
                <Route path="/progress" element={<MuiProgress />} />
                <Route path="/skeleton" element={<MuiSkeleton />} />
                <Route path="/loadingButton" element={<MuiLoadingButton />} />
                <Route path="/picker" element={<MuiPicker />} />
                <Route path="/tabs" element={<MuiTabs />} />
                <Route path="/timeline" element={<MuiTimeline />} />
                <Route path="/masonry" element={<MuiMasonry />} />
                <Route path="/responsiveness" element={<MuiResponsiveness />} />
            </Routes>
        </>
    );
}

export default Routing;