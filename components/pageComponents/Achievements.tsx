"use client";

import { Trophy, Award, Star } from "lucide-react";
import achievements from "@/data/achievements.json";

const icons = {
  Trophy,
  Award,
  Star,
};

const colorMap: Record<string, string> = {
  Trophy: "text-indigo-200",
  Award: "text-indigo-300",
  Star: "text-indigo-400",
};

export function Achievements() {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold text-zinc-100">Achievements</h2>
        <div className="h-px bg-gradient-to-r from-zinc-700 via-zinc-800 to-transparent flex-1" />
      </div>{" "}
      <div className="space-y-2">
        {achievements.map((achievement, index) => {
          const IconComponent = icons[achievement.icon as keyof typeof icons];

          return (
            <div
              key={index}
              className="group flex items-start gap-3 p-2 rounded-md hover:bg-zinc-900/50 transition-all duration-200"
            >
              <div className="flex-shrink-0 pt-1">
                <IconComponent
                  className={`h-5 w-5 ${colorMap[achievement.icon]}`}
                />
              </div>

              <div className="flex-1 min-w-0 space-y-0.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-medium text-zinc-100 text-lg">
                    {achievement.title}
                  </span>
                  <span className="text-zinc-400 text-sm">•</span>
                  <span className="text-zinc-300 text-sm">
                    {achievement.event}
                  </span>
                  {achievement.detail && (
                    <>
                      <span className="text-zinc-500 text-sm">•</span>
                      <span className="text-zinc-500 text-xs">
                        {achievement.detail}
                      </span>
                    </>
                  )}
                  <span className="ml-auto font-semibold text-xs text-zinc-300">
                    {achievement.rank}
                  </span>
                </div>
                <div className="text-zinc-400 text-xs">
                  {achievement.organization}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Achievements;
