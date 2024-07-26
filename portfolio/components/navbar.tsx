"use client"
import { useEffect, useState } from 'react';
import { Wifi, BatteryCharging} from 'lucide-react';
import { ModeToggle } from './modeToggle';

const Navbar = () => {
    const [currentDateTime, setCurrentDateTime] = useState('');

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            setCurrentDateTime(now.toLocaleString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            }).replace(/,\s+/g, ' ')); // Remove commas
        };

        updateDateTime();
        const interval = setInterval(updateDateTime, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    return (
        <nav className="bg-black h-8 w-full flex items-center justify-between px-4">
            <div className="text-white font-bold text-md pl-2 pr-2">Harman Sahota</div>
            <div className="flex items-center space-x-4 pr-2">
                <div className="flex items-center">
                    <span className="text-white text-xs ml-1">100%</span>
                    <BatteryCharging className="h-4 w-4 text-white ml-1" />
                </div>
                <Wifi className="h-4 w-4 text-white font-bold" />
                <ModeToggle />
                <div className="text-white text-sm">{currentDateTime.replace('at ', '')}</div>
            </div>
        </nav>
    );
};

export default Navbar;
