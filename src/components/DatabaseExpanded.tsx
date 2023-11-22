import { usePathname } from 'next/navigation';

export default function DatabaseExpanded() {
  const currPath = usePathname();
  const pathArr = currPath.split('/');
  const lastPathParam = pathArr[pathArr.length - 1];
  return (
    <div>
      <nav className="border-r border-secondary-foreground h-screen">
        <div className=" py-[0.60rem] border-b border-secondary-foreground px-4 text-lg font-medium">
          Databases
        </div>
        <div className="border-b border-secondary-foreground px-2 py-4 w-full text-sm text-primary-foreground">
          <h5 className="px-2">Databases</h5>
          <ul className="py-2 ">
            <li
              className={`hover:bg-primary p-2 rounded-md w-full ${
                lastPathParam === 'tables' && 'text-foreground bg-secondary'
              }`}
            >
              Tables
            </li>
            <li className="hover:bg-primary hover:text-foreground p-2 rounded-md w-full">
              Visualiser
            </li>
            <li className="hover:bg-primary hover:text-foreground p-2 rounded-md w-full">
              Triggers
            </li>
            <li className="hover:bg-primary hover:text-foreground p-2 rounded-md w-full">
              Functions
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
