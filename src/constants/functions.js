import { faClapperboard, faGamepad, faVideoCamera } from "@fortawesome/free-solid-svg-icons";

export const getIcons = (iconName) => {
    const icons = [
        {
            name: 'faGamepad',
            icon: faGamepad, 
        },
        {
            name: 'faClapperboard',
            icon: faClapperboard, 
        },
        {
            name: 'faVideoCamera',
            icon: faVideoCamera, 
        }
    ]
    const filterIcon = icons.find(item => item.name === iconName)  
    return filterIcon.icon;
}