import { Controller } from "./Controller";
import { Request, Response } from "express";
import { User } from "../models/User";
import { Tattoo_artist } from "../models/tatoo_artist";
import { AppDataSource } from "../database/data-source";


// -----------------------------------------------------------------------------

export class ArtistController implements Controller {
   async getAll(req: Request, res: Response): Promise<void | Response<any>> {
      try {
         const artistRepository = AppDataSource.getRepository(Tattoo_artist);
         const allUsers = await artistRepository.find({
            select: ['nickname','id','description']
         });
         res.status(200).json(allUsers);
      } catch (error) {
         res.status(500).json({
            message: "Error while getting users",
         });
      }
   }

   async getById(req: Request, res: Response): Promise<void | Response<any>> {
      try {
         const artistid = +req.params.id;

         const artistRepository = AppDataSource.getRepository(Tattoo_artist);
         const user = await artistRepository.findOneBy({
            id: artistid,
            
         });

         if (!user) {
            return res.status(404).json({
               message: "User not found",
            });
         }

         res.status(200).json(user);
      } catch (error) {
         res.status(500).json({
            message: "Error while getting user",
         });
      }
   }
   
   async create(req: Request, res: Response): Promise<void | Response<any>> {
      try {
         const data = req.body;

         const artistRepository = AppDataSource.getRepository(Tattoo_artist);
         const newUser = await artistRepository.save(data);
         res.status(201).json(newUser);
      } catch (error) {
         res.status(500).json({
            message: "Error while creating user",
         });
      }
   }

   async update(req: Request, res: Response): Promise<void | Response<any>> {
      try {
         const id = +req.params.id;
         const data = req.body;

         const userRepository = AppDataSource.getRepository(Tattoo_artist);
         await userRepository.update({ id: id }, data);

         res.status(202).json({
            message: "User updated successfully",
         });
      } catch (error) {
         res.status(500).json({
            message: "Error while updating user",
         });
      }
   }

   async delete(req: Request, res: Response): Promise<void | Response<any>> {
      try {
         const id = +req.params.id;

         const artistRepository = AppDataSource.getRepository(Tattoo_artist);
         await artistRepository.delete(id);

         res.status(200).json({
            message: "User deleted successfully",
         });
      } catch (error) {
         res.status(500).json({
            message: "Error while deleting user",
         });
      }
   }
}

