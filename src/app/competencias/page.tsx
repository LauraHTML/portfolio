// export const metadata = {
//   title: "Competências",
//   description: "Tecnologias e ferramentas que ${siteConfig.name} domina.",  
// };
'use client'
import { SkillCard } from "@/components/SkillCard";
import { useState, useEffect } from 'react';
import { getTechnologies } from '@/services/getTechnologies';
import { TechnologiesT } from '@/lib/data'

import {LayoutDashboard} from 'lucide-react';


export default function SkillsPage() {

  const [technologies, setTechnologies] = useState<TechnologiesT[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  
    useEffect(() => {
      const technologiesList = async ()=>  {
        try{
          setLoading(true);
          const response = await getTechnologies();
          setTechnologies(response);
        }
        catch(err:any){
          setLoading(false);
          setError(err);
          console.error(`Erro ao buscar competências: ${err}`);
        }
        finally{
          setLoading(false);
        }
      }
      technologiesList();
    },[]);

  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">Competências</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Tecnologias e ferramentas que utilizo no dia a dia para desenvolver aplicações web.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {technologies !== undefined ? (
            technologies.map((skill) => (
            <SkillCard key={skill.category} {...skill} icon={LayoutDashboard} />
          ))
          ): (
            <p>Erro ao buscar competências do banco de dados</p>
          )}
          
        </div>
      </div>
    </div>
  );
}
