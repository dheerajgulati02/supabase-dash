import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SelectUser } from './ComboBox';

const Navbar = async () => {
  return (
    <nav className="flex justify-between px-4 py-1">
      <div className="rounded-md hover:bg-card">
        <SelectUser />
      </div>
    </nav>
  );
};

export default Navbar;
