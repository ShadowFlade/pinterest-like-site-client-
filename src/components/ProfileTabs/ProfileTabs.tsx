import * as React from 'react';
import { useState } from 'react';
import { Tab, Tabs, TabContent, TabContainer, TabPane, Row, Nav } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import './ProfileTabs.scss';
type ProfileTabsProps = { title: EProfileTabs; content: JSX.Element }[];
export enum EProfileTabs {
	Created = 'Created',
	Saved = 'Saved',
	Published = 'Published',
	Default = 'nothing',
}
const ProfileTabs = ({ items }: { items: ProfileTabsProps }) => {
	const [key, setKey] = useState<any>('Created');
	return (
		<div className="tabs">
			<Tab.Container
				defaultActiveKey="Created"
				id="controlled-tab-example"
				activeKey={key}
				onSelect={(item) => setKey(item)}
			>
				<Nav variant={'tabs'} className="tabs__nav">
					{items.map((item) => {
						return (
							<Nav.Item key={nanoid()}>
								<Nav.Link eventKey={item.title}>{item.title}</Nav.Link>
							</Nav.Item>
						);
					})}
				</Nav>

				<Tab.Content className="tabs__content">
					{items.map((item) => {
						return (
							<Tab.Pane
								key={nanoid()}
								className={`tabs__item`}
								eventKey={item.title}
								title={item.title}
							>
								{item.content}
							</Tab.Pane>
						);
					})}
				</Tab.Content>
			</Tab.Container>
		</div>
	);
};
export default ProfileTabs;
