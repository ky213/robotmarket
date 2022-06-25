
export type RobotMaterial =
| 'Soft'
| 'Plastic'
| 'Fresh'
| 'Steel'
| 'Rubber'
| 'Wooden'
| 'Granite'
| 'Concrete'
| 'Cotton'
| 'Metal'
| 'Frozen';

export type FilterMaterial = 'all' | RobotMaterial;

export interface Robot {
    id: string;
    name: string;
    price: string;
    material: RobotMaterial;
    stock: number;
    remainingStock: number;
    image: string;
    createdAt: Date;
}

export interface RobotsState {
    robots: Robot[];
    currentRobot: Robot
    loading: boolean;
    error: string | null;
    
}

