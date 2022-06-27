/// <reference types="react" />
import './ProfileTabs.scss';
declare type ProfileTabsProps = {
    title: EProfileTabs;
    content: JSX.Element;
}[];
export declare enum EProfileTabs {
    Created = "Created",
    Saved = "Saved",
    Published = "Published",
    Default = "nothing"
}
declare const ProfileTabs: ({ items }: {
    items: ProfileTabsProps;
}) => JSX.Element;
export default ProfileTabs;
