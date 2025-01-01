interface SidebarItemProps {
    icon: React.ReactNode;
    title: string;
}
const SidebarItem: React.FC<SidebarItemProps> = ({ icon, title }) => {
    return (
        <div className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
            <span>{icon}</span>
            <span>{title}</span>
        </div>
    )
}

export default SidebarItem