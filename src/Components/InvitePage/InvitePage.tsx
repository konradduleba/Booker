import React, { useEffect, useState } from 'react';
import HeaderMeta from '../Global/HeaderMeta/HeaderMeta';
import SectionComponent from '../Global/Section/Section';
import testInvites from './testInvites';
import IInviteList from '../Global/DisplayRandomPeople/Types/IInviteList';
import './Styles/InvitePage.scss';
import DisplayRandomPeople from '../Global/DisplayRandomPeople/DisplayRandomPeople';

const InvitePage = (): JSX.Element => {
    const [friendsRequests, setFriendsRequests] = useState<IInviteList[]>([]);

    useEffect(() => setFriendsRequests(testInvites), [])

    return (
        <SectionComponent header='People that send you friend request'>
            <HeaderMeta title='Invite' />
            <div className='invite-page-wrapper column-with-padding'>
                <DisplayRandomPeople inviteList={friendsRequests} />
            </div>
        </SectionComponent>
    )
};

export default InvitePage;