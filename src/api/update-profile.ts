import { api } from "@/lib/axios";

interface updateProfileBody {
  name: string,
  description: string | null
}

export async function updateProfile({description,name}:updateProfileBody){
  throw new Error()
  
  await api.put('/profile', {name, description})
  
} 