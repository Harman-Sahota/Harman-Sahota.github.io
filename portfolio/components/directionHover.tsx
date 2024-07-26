"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface ProjectCard {
    name: string;
    description: string;
    link: string;
    imageUrl: string;
}

interface DirectionAwareHoverDemoProps {
    projects: ProjectCard[];
}

export function DirectionAwareHoverDemo({ projects }: DirectionAwareHoverDemoProps) {
    return (
        <div className="flex flex-wrap justify-center w-full sm:h-2 lg:h-[40rem] relative p-4">
            {projects.map((project, index) => (
                <Card
                    key={index}
                    className="relative w-[400px] h-[350px] bg-cover bg-center m-4"
                    style={{ backgroundImage: `url(${project.imageUrl})` }}
                >
                    <div className="absolute inset-0 bg-black opacity-40" /> {/* Overlay for better readability */}
                    <CardHeader>
                        <CardTitle className="text-sky-800">{project.name}</CardTitle>
                        <CardDescription className="text-sky-600 font-bold">{project.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="absolute bottom-0 left-0 right-0 flex justify-between p-4">
                        <Button onClick={() => window.open(project.link, "_blank")} variant="outline">View Project</Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
