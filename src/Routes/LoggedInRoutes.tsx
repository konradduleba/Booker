import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { UserData } from '../Authentication/UserDataContext/UserDataContext';
import AboutPageComponent from '../Components/AboutPageComponent/AboutPageComponent';
import BannerComponent from '../Components/BannerComponent/BannerComponent';
import ContactPageComponent from '../Components/ContactPageComponent/ContactPageComponent';
import FAQPageComponent from '../Components/FAQPageComponent/FAQPageComponent';
import FooterComponent from '../Components/FooterComponent/FooterComponent';
import LogoutPageComponent from '../Components/LogoutPageComponent/LogoutPageComponent';
import MyProfilePageComponent from '../Components/MyProfilePageComponent/MyProfilePageComponent';
import NotFoundPage from '../Components/NotFoundPage/NotFoundPage';
import PrivacyPolicyComponent from '../Components/PrivacyPolicyComponent/PrivacyPolicyComponent';
import QuickMenuComponent from '../Components/QuickMenuComponent/QuickMenuComponent';
import QuickSearchComponent from '../Components/QuickSearchComponent/QuickSearchComponent';
import TermsPageComponent from '../Components/TermsPageComponent/TermsPageComponent';
import MyFriendsComponent from '../Components/MyFriendsComponent/MyFriendsComponent';
import MyGroupsComponent from '../Components/MyGroupsComponent/MyGroupsComponent';
import MyPartiesComponent from '../Components/MyPartiesComponent/MyPartiesComponent';
import AddPartyComponent from '../Components/CreatePartyComponent/CreatePartyComponent';
import routes from '../Utils/routes.json';

const LoggedInRoutes = (): JSX.Element => {
    const { userData } = useContext(UserData);

    if (!userData?.isLoggedIn) return <Redirect to="/welcome" />

    return (
        <div className="main-page-wrapper">
            <BannerComponent />
            <main>
                <div className='quick-panel-wrapper'>
                    <QuickSearchComponent />
                    <QuickMenuComponent />
                </div>
                <Switch>
                    <Route exact path="/app/home"><h1>Hello</h1></Route>
                    <Route path={`/app${routes.about.href}`} component={AboutPageComponent} />
                    <Route path={`/app${routes.contact.href}`} component={ContactPageComponent} />
                    <Route path={`/app${routes.faq.href}`} component={FAQPageComponent} />
                    <Route path={`/app${routes.terms.href}`} component={TermsPageComponent} />
                    <Route path={`/app${routes.privacy.href}`} component={PrivacyPolicyComponent} />
                    <Route path={`/app${routes.logout.href}`} component={LogoutPageComponent} />
                    <Route path={`/app${routes.myProfile.href}`} component={MyProfilePageComponent} />
                    <Route path={`/app${routes.myFriends.href}`} component={MyFriendsComponent} />
                    <Route path={`/app${routes.myGroups.href}`} component={MyGroupsComponent} />
                    <Route path={`/app${routes.myParties.href}`} component={MyPartiesComponent} />
                    <Route path={`/app${routes.createParty.href}`} component={AddPartyComponent} />
                    <Route path="/app/*" component={NotFoundPage} />
                    <Redirect path='/app' to='/app/home' />
                </Switch>
            </main>
            <FooterComponent />
        </div>
    );
};

export default LoggedInRoutes;

/* <Route exact path="/app/settings" component={SettingsPage}></Route>
      <Route exact path="/app/add" component={AddEntryPage}></Route>
      <Route exact path="/app/add/:type" component={AddEntryPage}></Route>
      <Route exact path="/app/edit/:type/:id" component={AddEntryPage}></Route>
      <Route exact path="/app/change-password" component={ChangePasswordPage}></Route>
      <Route exact path="/app/change-email" component={ChangeEmailPage}></Route>
      <Route exact path="/app/change-username" component={ChangeUsernamePage}></Route>
      <Route exact path="/app/change-photo" component={ChangeUserPhoto}></Route>
      <Route exact path="/app/view/:type/:id" component={ViewEntryPage}></Route> */
