
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

export type FilterMaterial = 'All' | RobotMaterial;

export interface Robot {
    name: string;
    price: string;
    material: RobotMaterial;
    stock: number;
    image: string;
    createdAt: string;
}

export interface RobotsState {
    robotsList: Robot[];
    filter: FilterMaterial;
    currentRobot: Robot | null
    loading: boolean;
    error: string | null;
    
}

