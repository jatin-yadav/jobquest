interface SidebarItemProps {
    icon: React.ReactNode;
    title: string;
}
const SidebarItem: React.FC<SidebarItemProps> = ({ icon, title }) => {
    return (
        <div className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer mt-2 pl-8">
            <span>{icon}</span>
            <span className="font-semibold px-2">{title}</span>
        </div>
    )
}

export default SidebarItem