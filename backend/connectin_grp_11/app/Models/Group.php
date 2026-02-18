<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Group extends Model
{
    use HasFactory;

    // 1. Configuration de la clé primaire (très important pour ton SQL)
    protected $primaryKey = 'group_name'; // Ta clé est 'group_name' au lieu de 'id'
    public $incrementing = false;        // Ce n'est pas un nombre auto-incrémenté
    protected $keyType = 'string';       // C'est un VARCHAR (string)

    // 2. Champs autorisés à l'écriture
    protected $fillable = [
        'group_name',
        'banner',
        'description',
    ];

    /**
     * Un groupe contient plusieurs posts.
     * On précise les colonnes car on ne suit pas la convention 'id'.
     */
    public function posts(): HasMany
    {
        return $this->hasMany(Post::class, 'group_id', 'group_name');
    }

    /**
     * Relation Many-to-Many avec les Utilisateurs via la table 'user_groups'.
     */
    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'user_groups', 'group_id', 'user_id')
                    ->withTimestamps(); // Ton SQL contient created_at/updated_at sur la pivot
    }
}