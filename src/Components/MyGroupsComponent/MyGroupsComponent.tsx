import React from 'react';
import SectionComponent from '../GlobalComponents/SectionComponent/SectionComponent';
import testGroupList from './testGroupList';
import IMyGroups from './Types/IMyGroups';
import './Styles/MyGroupsComponent.scss';

const MyGroupsComponent = (): JSX.Element => (
    <SectionComponent header={`My Groups (${testGroupList.length})`}>
        <div className='my-groups-wrapper'>
            {testGroupList.map(({ ID, name, photo }: IMyGroups) => <div key={`${name}${ID}`}>
                <img src={photo} alt={name} />
                <p>{name}</p>
            </div>)}
        </div>
    </SectionComponent>
);

export default MyGroupsComponent;